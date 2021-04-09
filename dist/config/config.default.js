"use strict";
module.exports = {
    // sequelize config
    sequelize: {
        pool: {
            max: 50,
            min: 0,
            idle: 10000,
            acquire: 30000,
        },
        timezone: '+08:00',
        // operatorsAliases: false, // v5版本console警告
        dialectOptions: {
            supportBigNumbers: true,
            bigNumberStrings: true,
            dateStrings: true,
            typeCast: true
        },
        define: {
            charset: 'utf8mb4',
            dialectOptions: {
                collate: 'utf8mb4_general_ci',
            },
            version: true,
            paranoid: true,
            freezeTableName: true,
            underscored: true,
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            deletedAt: 'deleted_at'
        }
    },
    // TypeORM
    orm: {},
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1F1bi9VbmNsdXR0ZXIvbWlkd2F5LWxlcm5hL3BhY2thZ2VzL21pZHdheS1vcm0tc3FsL3NyYy8iLCJzb3VyY2VzIjpbImNvbmZpZy9jb25maWcuZGVmYXVsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUJBQVM7SUFDTCxtQkFBbUI7SUFDbkIsU0FBUyxFQUFFO1FBQ1AsSUFBSSxFQUFFO1lBQ0YsR0FBRyxFQUFFLEVBQUU7WUFDUCxHQUFHLEVBQUUsQ0FBQztZQUNOLElBQUksRUFBRSxLQUFLO1lBQ1gsT0FBTyxFQUFFLEtBQUs7U0FDakI7UUFDRCxRQUFRLEVBQUUsUUFBUTtRQUNsQiw0Q0FBNEM7UUFDNUMsY0FBYyxFQUFFO1lBQ1osaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFFBQVEsRUFBRSxJQUFJO1NBQ2pCO1FBQ0QsTUFBTSxFQUFFO1lBQ0osT0FBTyxFQUFFLFNBQVM7WUFDbEIsY0FBYyxFQUFFO2dCQUNaLE9BQU8sRUFBRSxvQkFBb0I7YUFDaEM7WUFDRCxPQUFPLEVBQUUsSUFBSTtZQUNiLFFBQVEsRUFBRSxJQUFJO1lBQ2QsZUFBZSxFQUFFLElBQUk7WUFDckIsV0FBVyxFQUFFLElBQUk7WUFDakIsVUFBVSxFQUFFLElBQUk7WUFDaEIsU0FBUyxFQUFFLFlBQVk7WUFDdkIsU0FBUyxFQUFFLFlBQVk7WUFDdkIsU0FBUyxFQUFFLFlBQVk7U0FDMUI7S0FDSjtJQUNELFVBQVU7SUFDVixHQUFHLEVBQUUsRUFBRTtDQUNWLENBQUEifQ==