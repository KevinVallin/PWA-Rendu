function installPWA() {



    return (
        <>
            <div className="navbar bg-base-100">
                <a className="btn btn-ghost normal-case text-xl">PWA-Rendu</a>
            </div>
            <div className="min-h-screen dark:bg-slate-800 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-700 to-orange-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">Aide à l'installation d'une PWA</h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <h2>Qu'est ce qu'une PWA ?</h2>
                                        <p>Les progressive web apps (PWA) utilisent les dernières technologies pour combiner les meilleures applications Web et mobiles.
                                        <br/>
                                        Elle sonts optimisés pour être accesible rapidement même en ayant peu de connexion.
                                        De plus, les PWA(s) cela comprend des fonctionnalités Natif de IOS / Android et plus encore tels que l'envoi de notification, vibration, et plus <a href="https://whatpwacando.today">encore</a>
                                        </p>
                                    </div>
                                    <div className="relative">
                                        <h2>Sur quels appareils ?</h2>
                                        <p> Les PWA sont disponible sur tout les smartphones: IOS, Android, tablettes ainsi que les applications PC <a href="https://www.goodbarber.com/blog/progressive-web-apps-browser-support-compatibility-a883/">Voyez par vous même</a> 
                                        </p>
                                    </div>
                                    <div className="relative">
                                        <h2>Comment installer une PWA ?</h2>
                                        <p>
                                        Vous souhaitez installer notre PWA sur votre appareil, Cliquez <a href="https://support.google.com/chrome/answer/9658361?hl=fr&co=GENIE.Platform%3DDesktop&oco=1">ici</a>
                                        </p>
                                    </div>
                                    <div className="relative">
                                        <h2>Comment vérifier les fonctionnalités disponibles sur votre Appareil ?</h2>
                                        <p>
                                         Vous souhaitez voir les possibilitées de la PWA sur votre appareil, Cliquez <a href="https://pwafire.org/developer/tools/browser-test/">ici</a>  
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default installPWA;