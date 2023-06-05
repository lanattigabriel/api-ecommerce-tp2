import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/index.js";

class User extends Model {}

    User.init({
        name: {
            type: DT.STRING,
            allowNull: false
        },
        lastName: {
            type: DT.STRING,
            allowNull: false
        },
        password: {
            type: DT.STRING,
            allowNull: false
        },
        email: {
            type: DT.STRING,
            allowNull: false
        }
    },
    {
        sequelize: connection,
        modelName: 'User'
    }
)

export default User