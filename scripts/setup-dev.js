#!/usr/bin/env node

// Development setup script
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('🚀 Setting up Our Class development environment...\n')

// Check if .env exists
if (!fs.existsSync('.env')) {
  console.log('📝 Creating .env file from .env.example...')
  try {
    fs.copyFileSync('.env.example', '.env')
    console.log('✓ .env file created')
  } catch (error) {
    console.log('⚠ Please manually copy .env.example to .env')
  }
} else {
  console.log('✓ .env file exists')
}

// Generate Prisma client
console.log('\n🔧 Generating Prisma client...')
try {
  execSync('npx prisma generate', { stdio: 'inherit' })
  console.log('✓ Prisma client generated')
} catch (error) {
  console.error('❌ Failed to generate Prisma client')
  process.exit(1)
}

// Check if database exists, if not create it
console.log('\n📊 Setting up database...')
try {
  execSync('npx prisma db push', { stdio: 'inherit' })
  console.log('✓ Database schema synchronized')
} catch (error) {
  console.error('❌ Failed to setup database')
  process.exit(1)
}

// Check if database has data
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function checkAndSeedDatabase() {
  try {
    const userCount = await prisma.user.count()
    
    if (userCount === 0) {
      console.log('\n🌱 Seeding database with demo data...')
      execSync('npx tsx prisma/seed.ts', { stdio: 'inherit' })
      console.log('✓ Database seeded with demo accounts')
    } else {
      console.log(`✓ Database already has ${userCount} users`)
    }
  } catch (error) {
    console.log('⚠ Could not check database, but setup should be complete')
  } finally {
    await prisma.$disconnect()
  }
  
  console.log('\n🎉 Development environment setup complete!')
  console.log('\nDemo accounts:')
  console.log('- Teacher: teacher@demo.com / password')
  console.log('- Student: student@demo.com / password') 
  console.log('- Admin: admin@demo.com / password')
  console.log('\nRun: npm run dev')
  console.log('Then visit: http://localhost:3000')
}

checkAndSeedDatabase()