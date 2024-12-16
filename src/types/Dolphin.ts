export interface Dolphin {
  id: string;
  name: string;
  age: number;
  species: string;
  description: string;
  photoUrl: string;
  videoUrl?: string;
  background: string;
  rescueStatus: string;
}

export interface Stream {
  id: string;
  streamUrl: string;
  status: 'active' | 'inactive';
  createdAt: Date;
  updatedAt: Date;
}

export interface MachineVisionData {
  id: string;
  timestamp: Date;
  detectedDolphins: {
    dolphinId: string;
    confidence: number;
    activity?: string;
    location?: { x: number; y: number };
    behaviourAnalysis?: {
      engagement: number;
      socialInteraction: number;
      playfulness: number;
    };
  }[];
}