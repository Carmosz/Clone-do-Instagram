import React from 'react';
/* eslint-disable */
import './style.css';

export default function Suggestion() {


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

                    <img src="https://scontent.fcgh5-1.fna.fbcdn.net/v/t1.6435-9/175152005_141499104648573_1559391934785923861_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MRDaFSJmRxcAX8FWNZE&_nc_ht=scontent.fcgh5-1.fna&oh=00_AT9Zl5jvj-Cvc1EXNhyPsRqcaqjVJNdEV004WZz2bWk3jg&oe=637DCCD8" />

                    <div className="info-suggestion">
                        <span>felissspcs</span>
                        <p>Seguido por jcjessicarmo e mais 2 pessoas</p>
                    </div>
                    <button className="follow">Seguir</button>
                </div>

                <div className="infos-suggestion">

                    <img src="https://avatars.githubusercontent.com/u/33496735?v=4" />

                    <div className="info-suggestion">
                        <span>gab.augustoz</span>
                        <p>Seguido por você, instituto.proa e mais 1 pessoa</p>
                    </div>
                    <button className="follow">Seguir</button>
                </div>

                <div className="infos-suggestion">

                    <img src="https://t.ctcdn.com.br/HFhSbMG4u80him25D7_7ltR3fJQ=/400x400/smart/i489955.jpeg" />

                    <div className="info-suggestion">
                        <span>oracle</span>
                        <p>Seguido por instituto.proa, bancopan e mais 1 pessoa</p>
                    </div>
                    <button className="follow">Seguir</button>
                </div>

                <div className="infos-suggestion">

                    <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEuxFU5NAAcMg/company-logo_200_200/0/1617714559526?e=1674691200&v=beta&t=mJnkrNRTdfZQiEBOjBQNsM-f0dmVLrPGO3mPqncYQDE" />

                    <div className="info-suggestion">
                        <span>somas</span>
                        <p>Seguido por você, gabrielabetini e mais 5 pessoas</p>
                    </div>
                    <button className="follow">Seguir</button>
                </div>
            </div>

            <footer className="footer-suggestion">

                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Empregos &bull; Privacidade &bull; Termos &bull; Localizações &bull; idioma</p>

                <p>&copy; 2022 INSTAGRAM FROM META</p>

            </footer>
        </div>
    )

}