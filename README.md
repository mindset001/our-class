# Our Class - Online Learning Platform

A comprehensive online classroom platform built with Next.js, TypeScript, Prisma, and PostgreSQL. This platform enables teachers to create and manage courses, upload materials, create assignments, and grade submissions, while students can browse courses, access materials, and submit assignments.

## 🚀 Features

### For Teachers
- **Course Management**: Create and manage courses with modules and lessons
- **Content Upload**: Upload files (PDFs, docs) and link/upload videos
- **Assignment Creation**: Create assignments with due dates and attachments
- **Grading System**: View submissions, provide grades and feedback
- **Student Management**: Track student progress and engagement

### For Students
- **Course Browsing**: Discover and enroll in available courses
- **Material Access**: View and download course materials
- **Video Streaming**: Watch instructional videos
- **Assignment Submission**: Submit assignments with file uploads
- **Grade Tracking**: View grades and feedback from teachers

### For Administrators
- **User Management**: Manage teachers and students
- **System Oversight**: Monitor platform usage and performance
- **Audit Logs**: Track all user activities

### Shared Features
- **Role-based Authentication**: Secure login with role-based access control
- **Responsive Dashboard**: Clean, intuitive interface for all user types
- **Notifications**: Email and in-app notifications for deadlines and updates
- **File Management**: Secure file upload and storage system
- **Audit Trail**: Complete activity logging for compliance

## 🛠 Technology Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS with custom component library
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT tokens with bcrypt password hashing
- **File Storage**: Local file system (easily extensible to cloud storage)
- **Email**: Nodemailer for notifications
- **Video Hosting**: Configurable (supports Cloudinary and other providers)

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v18 or higher)
- PostgreSQL database
- npm or yarn package manager

## 🏁 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd our-class
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Setup

Copy the example environment file and configure your settings:

```bash
cp .env.example .env
```

Update the `.env` file with your configuration:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/our_class_db"

# Authentication
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
BCRYPT_ROUNDS=12

# File Upload
UPLOAD_DIR="./uploads"
MAX_FILE_SIZE=10485760  # 10MB in bytes

# Email Configuration
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# Video Hosting (Optional - Cloudinary example)
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# App Configuration
NEXT_PUBLIC_APP_NAME="Our Class"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 4. Database Setup

Create your PostgreSQL database and run the migration:

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma db push

# (Optional) Seed the database with sample data
npx prisma db seed
```

### 5. Quick Setup (Automated)

For a quick setup, run our automated setup script:

```bash
npm run setup
```

This will:
- Create .env file if it doesn't exist
- Generate Prisma client
- Set up the database schema
- Seed with demo data

### 6. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Manual Setup (Alternative)

If you prefer manual setup:

```bash
# Generate Prisma client
npm run db:generate

# Create and sync database
npm run db:push

# Seed with demo data (optional)
npm run db:seed
```

## 📱 Usage

### Demo Accounts

The platform includes demo accounts for testing:

- **Teacher**: teacher@demo.com / password
- **Student**: student@demo.com / password
- **Admin**: admin@demo.com / password

### Getting Started as a Teacher

1. Register with teacher role or use the demo teacher account
2. Access the teacher dashboard
3. Create your first course
4. Add modules and lessons
5. Upload materials and create assignments
6. Manage student enrollments and grade submissions

### Getting Started as a Student

1. Register with student role or use the demo student account
2. Browse available courses
3. Enroll in courses of interest
4. Access materials and watch videos
5. Complete and submit assignments
6. Track your grades and progress

## 🏗 Project Structure

```
our-class/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── api/               # API routes
│   │   ├── login/             # Authentication pages
│   │   ├── register/          # Registration page
│   │   ├── teacher/           # Teacher-specific pages
│   │   ├── student/           # Student-specific pages
│   │   └── admin/             # Admin-specific pages
│   ├── components/            # Reusable UI components
│   │   └── ui/               # Base UI components
│   └── lib/                  # Utility functions and configurations
├── prisma/                   # Database schema and migrations
├── public/                   # Static assets
└── uploads/                  # File upload directory
```

## 🔧 Development

### Database Management

```bash
# View database in Prisma Studio
npx prisma studio

# Reset database
npx prisma db push --force-reset

# Generate Prisma client after schema changes
npx prisma generate
```

### Building for Production

```bash
npm run build
npm start
```

## 🔧 Troubleshooting

### Prisma Client Issues

If you encounter Prisma client initialization errors:

```bash
# Regenerate Prisma client
npm run db:generate

# Reset and recreate database
npm run db:push

# Re-seed database
npm run db:seed
```

### Common Issues

1. **Port already in use**: The app will automatically use the next available port (usually 3001)
2. **Database connection errors**: Ensure your `.env` file has the correct DATABASE_URL
3. **Build failures**: Run `npm run db:generate` before building
4. **Missing demo data**: Run `npm run db:seed` to create demo accounts

## 🚀 Deployment

This application can be deployed to various platforms:

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Configure environment variables in the Vercel dashboard
3. Deploy automatically on git push

### Docker
```bash
# Build Docker image
docker build -t our-class .

# Run container
docker run -p 3000:3000 our-class
```

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `JWT_SECRET` | Secret key for JWT token generation | Yes |
| `BCRYPT_ROUNDS` | Bcrypt hashing rounds (default: 12) | No |
| `UPLOAD_DIR` | Directory for file uploads | No |
| `MAX_FILE_SIZE` | Maximum file upload size in bytes | No |
| `SMTP_*` | Email configuration for notifications | No |
| `CLOUDINARY_*` | Video hosting configuration | No |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-repo/our-class/issues) page
2. Create a new issue with detailed information
3. Contact the development team

## 🎯 Roadmap

- [ ] Real-time chat and discussion forums
- [ ] Advanced analytics and reporting
- [ ] Mobile app development
- [ ] Integration with external learning tools
- [ ] Advanced video features (live streaming, interactive videos)
- [ ] AI-powered content recommendations
- [ ] Multi-language support

## 🙏 Acknowledgments

- Next.js team for the excellent framework
- Prisma team for the powerful ORM
- Tailwind CSS for the utility-first CSS framework
- Radix UI for accessible component primitives