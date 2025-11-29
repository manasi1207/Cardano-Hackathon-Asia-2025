import axios from 'axios';

// This points to your Python Agent running locally
const AGENT_URL = 'http://127.0.0.1:8000';

export interface AnalysisResult {
  diagnosis: string;
  confidence: number;
  segmentation_mask: string;
  grad_cam_heatmap: string;
  midnight_proof_hash: string;
}

export const uploadToAgent = async (file: File): Promise<AnalysisResult> => {
  console.log("🚀 Starting upload for:", file.name);

  // 1. Convert Image to Base64 (Masumi/Agent expects this format)
  const toBase64 = (file: File) => new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });

  try {
    const base64Image = await toBase64(file);
    
    // 2. Prepare the Payload (MIP-003 Standard)
    const payload = {
      image_base64: base64Image,
      patient_id: `ANON-${Math.floor(Math.random() * 10000)}` // Generate a random ID
    };

    // 3. Send to Python Backend
    console.log("📡 Sending request to Agent...", AGENT_URL);
    const response = await axios.post(`${AGENT_URL}/job`, payload, {
      headers: {
        'Content-Type': 'application/json',
        // In a real app, this would be the transaction hash from the wallet
        'x-masumi-payment-tx': 'mock-tx-hash-for-hackathon' 
      }
    });

    console.log("✅ Agent Response:", response.data);
    return response.data;

  } catch (error) {
    console.error("❌ Upload Failed:", error);
    throw error;
  }
};