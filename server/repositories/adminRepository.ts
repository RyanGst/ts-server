import * as mongoose from 'mongoose';
import AdminSchema from '../schemas/adminSchema';

class AdminRepository {
    private model;

    constructor() {
        this.model = mongoose.model('Admin', AdminSchema);
    }

    getById(_id) {
        return this.model.findById(_id);
    }

    async create(user) {

        const check = await this.model.findOne({ 'username': user.username })

        if (check) {
            return
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
