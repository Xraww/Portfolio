export default function AboutMe() {
    return (
        <section className="flex flex-col gap-4 mx-4 md:mx-0">
            <h2 className="border-b pb-2 text-2xl md:text-3xl font-semibold font-mono">
                About me
            </h2>

            <div>
                <div className="relative rounded-2xl border">
                    <div className="flex items-center gap-2 px-4 py-2.5 border-b">
                        <div className="w-3 h-3 rounded-full bg-red-500 opacity-75" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-75" />
                        <div className="w-3 h-3 rounded-full bg-green-500 opacity-75" />
                        <div className="ml-2 text-sm text-muted-foreground">portfolio.tsx</div>
                    </div>
                    
                    <div className="p-4 text-sm font-mono space-y-1">
                        <div className="text-muted-foreground">{'// TODO: Look for a job'}</div>

                        <br/>

                        <div>
                            <span className="text-red-500">const</span> <span>{'developer = {'}</span>
                        </div>

                        <div className="pl-4">
                            <span className="text-muted-foreground">username: </span>
                            <span>&quot;Xraww&quot;</span>
                            <span className="text-muted-foreground">,</span>
                        </div>

                        <div className="pl-4">
                            <span className="text-muted-foreground">fullName: </span>
                            <span>&quot;Alexis Bonzi&quot;</span>
                            <span className="text-muted-foreground">,</span>
                        </div>

                        
                        <div className="pl-4">
                            <span className="text-muted-foreground">job: </span>
                            <span>&quot;Web Developer&quot;</span>
                            <span className="text-muted-foreground">,</span>
                        </div>

                        <div className="pl-4">
                            <span className="text-muted-foreground">location: </span>
                            <span>&quot;France&quot;</span>
                            <span className="text-muted-foreground">,</span>
                        </div>

                        <div className="pl-4">
                            <span className="text-muted-foreground">age: </span>
                            <span>21</span>
                            <span className="text-muted-foreground">,</span>
                        </div>

                        <div className="pl-4">
                            <span className="text-muted-foreground">hobbies: </span>
                            <span>&quot;Coding&quot;, &quot;Gaming&quot;, &quot;Football&quot;, &quot;Music&quot;</span>
                            <span className="text-muted-foreground">,</span>
                        </div>

                        <div className="pl-4">
                            <span className="text-muted-foreground">status: </span>
                            <span>&quot;Available&quot;</span>
                        </div>
                        
                        <div>{'}'}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}