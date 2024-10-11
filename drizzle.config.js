/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
        url: "postgresql://content_owner:bgCo2r4TZGYJ@ep-lively-haze-a5ph2hsb.us-east-2.aws.neon.tech/content?sslmode=require",
    }
};