import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'Campo nome não pode ficar vazio'
                    }
                },
            },
            sobrenome: Sequelize.STRING,
            email: Sequelize.STRING,
            password_hash: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
        }, {
            sequelize,
        })


        this.addHook('beforeSave', async user => {
            user.password_hash = await bcryptjs.hash(user.password, 8)
        })
        return this;
    }
}