"use client"

import { cn } from "@/lib/utils"
import { Loader2, UploadCloud } from "lucide-react"
import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"

interface BentoWorkspaceProps {
  onStartAnalysis: (fileName: string) => void
}

export function BentoWorkspace({ onStartAnalysis }: BentoWorkspaceProps) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles?.length === 0) return

    const file = acceptedFiles[0]
    console.log('📁 File selected:', file.name)
    
    setUploading(true)
    setError(null)

    try {
      // Convert to base64
      const reader = new FileReader()
      const base64Promise = new Promise<string>((resolve, reject) => {
        reader.onload = () => {
          const result = reader.result as string
          // Remove data:image/...;base64, prefix
          resolve(result.split(',')[1])
        }
        reader.onerror = reject
        reader.readAsDataURL(file)
      })

      const base64 = await base64Promise
      
      console.log('📤 Sending request to backend...')
      
      const response = await fetch('http://127.0.0.1:8000/job', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image_base64: base64,
          patient_id: `PATIENT_${Date.now()}`
        })
      })

      console.log('📥 Response status:', response.status)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log('✅ Backend Response:', data)
      
      // Now call the parent function
      onStartAnalysis(file.name)
      
    } catch (err) {
      console.error('❌ Upload failed:', err)
      setError(err instanceof Error ? err.message : 'Upload failed')
    } finally {
      setUploading(false)
    }
  }, [onStartAnalysis])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.png', '.jpg', '.jpeg'], 'application/dicom': ['.dcm'] },
    maxFiles: 1,
    disabled: uploading
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Aura <span className="text-cyan-400">Diagnostics</span>
          </h2>
          <p className="text-slate-400 mt-1">Medical imaging analysis powered by MedSAM & Midnight Privacy</p>
        </div>
      </div>

      {/* DROPZONE AREA */}
      <div 
        {...getRootProps()}
        className={cn(
          "relative h-[400px] rounded-3xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all bg-slate-900/30",
          isDragActive ? "border-cyan-500 bg-cyan-500/10" : "border-slate-700 hover:border-cyan-500/50",
          uploading && "opacity-50 cursor-not-allowed"
        )}
      >
        <input {...getInputProps()} />
        
        {uploading ? (
          <>
            <Loader2 className="w-16 h-16 text-cyan-400 mb-4 animate-spin" />
            <h3 className="text-2xl font-bold text-white mb-2">Analyzing...</h3>
            <p className="text-slate-400">Processing your medical image</p>
          </>
        ) : (
          <>
            <UploadCloud className="w-16 h-16 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Upload Mammogram</h3>
            <p className="text-slate-400">Drag & drop DICOM or PNG</p>
          </>
        )}
      </div>

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg">
          <p className="text-red-400 font-medium">Error: {error}</p>
        </div>
      )}
    </div>
  )
}