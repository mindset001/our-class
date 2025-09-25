import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    // Test database connection
    await prisma.$connect()
    
    // Get basic stats
    const userCount = await prisma.user.count()
    const courseCount = await prisma.course.count()
    
    await prisma.$disconnect()
    
    return NextResponse.json({
      status: 'healthy',
      database: 'connected',
      stats: {
        users: userCount,
        courses: courseCount
      },
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Health check failed:', error)
    
    return NextResponse.json(
      { 
        status: 'unhealthy',
        database: 'disconnected',
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}