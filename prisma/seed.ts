import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Starting seed...')

  // Hash password for demo accounts
  const hashedPassword = await bcrypt.hash('password', 12)

  // Create demo admin user
  const admin = await prisma.user.create({
    data: {
      email: 'admin@demo.com',
      username: 'admin',
      firstName: 'Admin',
      lastName: 'User',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })

  // Create demo teacher user
  const teacher = await prisma.user.create({
    data: {
      email: 'teacher@demo.com',
      username: 'teacher',
      firstName: 'John',
      lastName: 'Teacher',
      password: hashedPassword,
      role: 'TEACHER',
    },
  })

  // Create demo student user
  const student = await prisma.user.create({
    data: {
      email: 'student@demo.com',
      username: 'student',
      firstName: 'Jane',
      lastName: 'Student',
      password: hashedPassword,
      role: 'STUDENT',
    },
  })

  // Create a sample course
  const course = await prisma.course.create({
    data: {
      title: 'Introduction to Web Development',
      description: 'Learn the basics of HTML, CSS, and JavaScript',
      code: 'WEB101',
      teacherId: teacher.id,
      isActive: true,
    },
  })

  // Create a module for the course
  const module = await prisma.module.create({
    data: {
      title: 'Getting Started with HTML',
      description: 'Learn the fundamentals of HTML markup',
      order: 1,
      courseId: course.id,
    },
  })

  // Create a lesson in the module
  const lesson = await prisma.lesson.create({
    data: {
      title: 'HTML Basics',
      description: 'Introduction to HTML tags and structure',
      content: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages...',
      order: 1,
      moduleId: module.id,
    },
  })

  // Enroll the student in the course
  await prisma.enrollment.create({
    data: {
      studentId: student.id,
      courseId: course.id,
      status: 'ACTIVE',
    },
  })

  // Create a sample assignment
  const assignment = await prisma.assignment.create({
    data: {
      title: 'Create Your First HTML Page',
      description: 'Create a simple HTML page with basic tags including headings, paragraphs, and links.',
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Due in 7 days
      maxPoints: 100,
      courseId: course.id,
      teacherId: teacher.id,
      isPublished: true,
    },
  })

  console.log('Seed completed successfully!')
  console.log('Demo accounts created:')
  console.log('- Admin: admin@demo.com / password')
  console.log('- Teacher: teacher@demo.com / password')
  console.log('- Student: student@demo.com / password')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })