import User from '../models/Aluno'

class HomeController {
    async store(req, res) {
        const novoAluno = await Aluno.create({

        });
        res.json({
            "tudoCerto": true,
        });
    }
}

export default new UserController();