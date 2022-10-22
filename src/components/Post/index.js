import './style.css'
import { FiMoreHorizontal } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat, BsBookmark, BsEmojiSmile } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'
import { IconContext } from 'react-icons'


export function Post() {
    return (
        <>
            <header className="header-post">
                <div className="infos-post">
                    <img className="img-header-post" src="https://lh3.googleusercontent.com/p/AF1QipMLn7_Sg5E9y0W0saGChj6fXsvynd9doV-zOKEB=w1080-h608-p-no-v0" />

                    <p><b>FelisssPcs</b></p>
                </div>
                <FiMoreHorizontal />
            </header>

            <div className="img-post">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWl5LakkRmLFHVKWvWRgNRCJoYURKK4C-A-6slTPK_aHpXQnftJqut7uU8zvxewFvh30I&usqp=CAU" />

            </div>

            <div className="footer-post">
                <IconContext.Provider value={{ size: "30px" }}>

                    <section className="engagement-post">
                        <div className="icons-1">
                            <div className="icon"><IoMdHeartEmpty /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>

                        <div className="icon"><BsBookmark /></div>
                    </section>
                </IconContext.Provider>

                <section className="like">
                    <span>101 curtidas</span>
                </section>

                <div className="legend">
                    <p>
                        <span>FelisssPcs</span> Traga seu celular para fazermos um orçamento sem compromisso para você.
                    </p>
                </div>

                <div className="time-post">
                    <time>Há 45 minutos</time>
                </div>

                <div className="comment">
                    <div className="fake-comment">
                        <IconContext.Provider value={{ size: "25px" }}>
                            <div className='icon'>

                                <BsEmojiSmile />
                            </div>
                        </IconContext.Provider>

                        <input placeholder='Adicione um comentário...' />

                    </div>
                    <button>Publicar</button>

                </div>
            </div>


            {/*  */}

            <header className="header-post">
                <div className="infos-post">
                    <img className="img-header-post" src="https://avatars.githubusercontent.com/u/72942750?v=4" />

                    <p><b>Carmosz_</b></p>
                </div>
                <FiMoreHorizontal />
            </header>

            <div className="img-post">
                <img src="https://media-exp1.licdn.com/dms/image/C4D22AQHW7bSD7jfFJw/feedshare-shrink_1280/0/1664052801762?e=1669248000&v=beta&t=BLd8kxywy7e5o7m9zL7nWOIAYhEAmmVzalp6D9cv8no" />

            </div>

            <div className="footer-post">
                <IconContext.Provider value={{ size: "30px" }}>

                    <section className="engagement-post">
                        <div className="icons-1">
                            <div className="icon"><IoMdHeartEmpty /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>

                        <div className="icon"><BsBookmark /></div>
                    </section>
                </IconContext.Provider>

                <section className="like">
                    <span>99 curtidas</span>
                </section>

                <div className="legend">
                    <p>
                        <span>Carmosz_</span> Hello World!
                    </p>
                </div>

                <div className="time-post">
                    <time>Há 50 minutos</time>
                </div>

                <div className="comment">
                    <div className="fake-comment">
                        <IconContext.Provider value={{ size: "25px" }}>
                            <div className='icon'>

                                <BsEmojiSmile />
                            </div>
                        </IconContext.Provider>

                        <input placeholder='Adicione um comentário...' />

                    </div>
                    <button>Publicar</button>

                </div>
            </div>
        </>
    )
}