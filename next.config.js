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
      }
}

module.exports = nextConfig
