// src/lib/api.ts

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://lifesync-backend-1jhd.onrender.com/api";

export interface AppStats {
  activeUsers: number;
  totalFeatures: number;
  uptime: number;
}

export async function getAppStats(): Promise<AppStats> {
  try {
    // Try to fetch from backend
    const response = await fetch(`${API_BASE_URL}/dashboard`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (response.ok) {
      const data = await response.json();
      return {
        activeUsers: data.activeUsers || 10000,
        totalFeatures: data.totalFeatures || 50,
        uptime: data.uptime || 99.9,
      };
    }
  } catch (error) {
    console.error("Failed to fetch stats:", error);
  }

  // Fallback to default stats if API fails
  return {
    activeUsers: 10000,
    totalFeatures: 50,
    uptime: 99.9,
  };
}
