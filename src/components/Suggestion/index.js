import './style.css'

export function Suggestion() {


    return (

        <div className="container-suggestion">
            <div className="header-suggestion">
                <img src="https://avatars.githubusercontent.com/u/72942750?v=4" />
            </div>

            <div className="user-infos-suggestion">

                <div className="infos">
                    <span>carmosz_</span>
                    <p>Jeniffer Carmo</p>
                </div>
                <button className="switch">Mudar</button>
            </div>

            <div className="header-main-suggestion">
                <p>Sugestões para você</p>
                <span>Ver tudo</span>
            </div>

            <div className="user-suggestion">

                <div className="infos-suggestion">

                    <img src="https://avatars.githubusercontent.com/u/72942750?v=4" />

                    <div className="info-suggestion">
                        <span>gabs</span>
                        <p>Seguido por filipechamps</p>
                    </div>
                    <button className="follow">Seguir</button>
                </div>

                <div className="infos-suggestion">

                    <img src="https://avatars.githubusercontent.com/u/72942750?v=4" />

                    <div className="info-suggestion">
                        <span>carmosz_</span>
                        <p>Seguido por filipechamps</p>
                    </div>
                    <button className="follow">Seguir</button>
                </div>
            </div>

            <footer className="footer-suggestion">

                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>

                <p>&copy; 2021 INSTAGRAM FROM META</p>

            </footer>
        </div>
    )

}