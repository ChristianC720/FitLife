export interface GetDashboardQuery {
  userId: string
}

export interface DashboardDTO {
  stats: Array<{ label: string; value: string }>
  recentActivities: Array<{ id: string; text: string }>
}

// Frontend query handler could call a read-optimized endpoint
export async function executeGetDashboard(query: GetDashboardQuery): Promise<DashboardDTO> {
  const res = await fetch(`/api/dashboard?userId=${encodeURIComponent(query.userId)}`)
  if (!res.ok) {
    return { stats: [], recentActivities: [] }
  }
  return res.json()
}
