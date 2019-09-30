import * as mongoose from 'mongoose';
import AdminSchema from '../schemas/adminSchema';
import * as bcrypt from 'bcrypt';


class AdminRepository {
    private model;

    constructor() {
        this.model = mongoose.model('Admin', AdminSchema);
    }

    getById(_id) {
        return this.model.findById(_id);
    }

    async create(user) {

        const userExists = await this.model.findOne({ 'username': user.username })

        if (userExists) {
            return 'Username already in use'
        } else {
            const hash = await bcrypt
                .hash(user.password, 8)

            user.password = hash

            return this.model.create(user)
        }
    }

    update(_id, user) {
        const updateAdmin = (<any>Object).assign({}, user);
        return this.model.findByIdAndUpdate(_id, updateAdmin, { new: true });
    }

    delete(_id) {
        return this.model.findByIdAndRemove(_id);
    }

}


export default new AdminRepository;
