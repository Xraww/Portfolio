import { ImageResponse } from '@vercel/og'
import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET() {
    try {
        return new ImageResponse(
            (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '1200px',
                        height: '630px',
                        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
                        color: 'white',
                        fontFamily: 'Inter, sans-serif',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {/* Animated Background Elements */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '-50px',
                            right: '-50px',
                            width: '300px',
                            height: '300px',
                            background: 'radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, transparent 70%)',
                            borderRadius: '50%',
                            animation: 'pulse 4s ease-in-out infinite',
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '-100px',
                            left: '-100px',
                            width: '400px',
                            height: '400px',
                            background: 'radial-gradient(circle, rgba(255, 0, 255, 0.08) 0%, transparent 70%)',
                            borderRadius: '50%',
                        }}
                    />

                    {/* Grid Pattern Overlay */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `
                                linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                            `,
                            backgroundSize: '50px 50px',
                        }}
                    />

                    {/* Main Content */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            zIndex: 10,
                            position: 'relative',
                        }}
                    >
                        {/* Name with Glow Effect */}
                        <div
                            style={{
                                fontSize: 84,
                                fontWeight: '900',
                                background: 'linear-gradient(45deg, #00ffff, #ffffff, #ff00ff)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                                marginBottom: '10px',
                                textShadow: '0 0 30px rgba(0, 255, 255, 0.5)',
                                letterSpacing: '-0.02em',
                            }}
                        >
                            Xraww
                        </div>

                        {/* Full Name */}
                        <div
                            style={{
                                fontSize: 28,
                                fontWeight: '300',
                                color: '#b0b0b0',
                                marginBottom: '20px',
                                letterSpacing: '0.05em',
                            }}
                        >
                            Alexis Bonzi
                        </div>

                        {/* Title */}
                        <div
                            style={{
                                fontSize: 36,
                                fontWeight: '400',
                                color: '#e0e0e0',
                                marginBottom: '40px',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                            }}
                        >
                            Full Stack Developer
                        </div>

                        {/* Tech Stack Pills */}
                        <div
                            style={{
                                display: 'flex',
                                gap: '12px',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                marginBottom: '50px',
                            }}
                        >
                            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'].map((tech, index) => (
                                <div
                                    key={tech}
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        color: '#ffffff',
                                        padding: '10px 20px',
                                        borderRadius: '25px',
                                        fontSize: '16px',
                                        fontWeight: '500',
                                        border: '1px solid rgba(0, 255, 255, 0.2)',
                                        backdropFilter: 'blur(10px)',
                                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                                    }}
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>

                        {/* Accent Line */}
                        <div
                            style={{
                                width: '200px',
                                height: '3px',
                                background: 'linear-gradient(90deg, #00ffff, #ff00ff, #00ffff)',
                                borderRadius: '2px',
                                marginBottom: '30px',
                                boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
                            }}
                        />

                        {/* Portfolio URL */}
                        <div
                            style={{
                                fontSize: '20px',
                                color: '#888888',
                                fontWeight: '300',
                                letterSpacing: '0.15em',
                                fontFamily: 'monospace',
                            }}
                        >
                            xraww.fr
                        </div>
                    </div>

                    {/* Floating Code Elements */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '80px',
                            left: '80px',
                            fontSize: '14px',
                            color: 'rgba(0, 255, 255, 0.3)',
                            fontFamily: 'monospace',
                            transform: 'rotate(-15deg)',
                        }}
                    >
                        {'< />'}
                    </div>
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '100px',
                            right: '100px',
                            fontSize: '12px',
                            color: 'rgba(255, 0, 255, 0.3)',
                            fontFamily: 'monospace',
                            transform: 'rotate(15deg)',
                        }}
                    >
                        {'{ }'}
                    </div>
                </div>
            ),
            { width: 1200, height: 630 }
        )
    } catch (e) {
        console.error(e)
        return NextResponse.json({ error: 'Failed to generate image' }, { status: 500 })
    }
}
