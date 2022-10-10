import Aluno from '../models/Aluno'

class HomeController {
    async index(req, res) {
        const novoAluno = await Aluno.create({

        });
        res.json({
            "tudoCerto": true,
        });
    }
}

export default new HomeController();