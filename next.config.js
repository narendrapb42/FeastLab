/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'mealsbucketfeastlab.s3.amazonaws.com',
            pathname: '/**' // Allow all images from the bucket
          }
        ]
      },
      env: {
        AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
        AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY
      }
}

module.exports = nextConfig
