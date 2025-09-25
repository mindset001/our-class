#!/usr/bin/env node

// Database initialization script
const { PrismaClient } = require('@prisma/client')

async function initializeDatabase() {
  const prisma = new PrismaClient()
  
  try {
    console.log('Checking database connection...')
    await prisma.$connect()
    console.log('✓ Database connected successfully')
    
    // Test query to ensure tables exist
    const userCount = await prisma.user.count()
    console.log(`✓ Database initialized with ${userCount} users`)
    
  } catch (error) {
    console.error('Database initialization failed:', error.message)
    console.log('Run: npx prisma db push')
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

if (require.main === module) {
  initializeDatabase()
}

module.exports = { initializeDatabase }