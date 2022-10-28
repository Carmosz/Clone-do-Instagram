import React from 'react';
/* eslint-disable */
import './style.css';
import { FiMoreHorizontal } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { BsChat, BsBookmark, BsEmojiSmile } from 'react-icons/bs';
import { FiSend } from 'react-icons/fi';
import { IconContext } from 'react-icons';


export default function Post() {
    return (
        <div>
            <header className="header-post">
                <div className="infos-post">
                    <img className="img-header-post" src="https://scontent.fcgh5-1.fna.fbcdn.net/v/t1.6435-9/175152005_141499104648573_1559391934785923861_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MRDaFSJmRxcAX8FWNZE&_nc_ht=scontent.fcgh5-1.fna&oh=00_AT9Zl5jvj-Cvc1EXNhyPsRqcaqjVJNdEV004WZz2bWk3jg&oe=637DCCD8" />

                    <p>felissspcs</p>
                </div>
                <FiMoreHorizontal />
            </header>

            <div className="img-post">
                <img src="https://scontent.fcgh4-1.fna.fbcdn.net/v/t1.6435-9/186558330_166539028811247_843523463825112646_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=iYe8nerjjHAAX8zsCgC&_nc_ht=scontent.fcgh4-1.fna&oh=00_AT-LcUBVfaaWncIrSM0bUnVHsNvztE-v4aB0smZIAxJ2CA&oe=6377A3CF" />

            </div>

            <div className="footer-post">
                <IconContext.Provider value={{ size: "26px" }}>

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
                        <span>felissspcs</span> Traga seu celular para fazermos um orçamento sem compromisso para você.
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

                    <p>carmosz_</p>
                </div>
                <FiMoreHorizontal />
            </header>

            <div className="img-post">
                <img src="https://media-exp1.licdn.com/dms/image/C4D22AQHW7bSD7jfFJw/feedshare-shrink_1280/0/1664052801762?e=1669248000&v=beta&t=BLd8kxywy7e5o7m9zL7nWOIAYhEAmmVzalp6D9cv8no" />

            </div>

            <div className="footer-post">
                <IconContext.Provider value={{ size: "26px" }}>

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
                        <span>carmosz_</span> Hello World!
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

            </div>
            )
}