import { useEffect, useState } from "react";

export const FollowMouse = () => {
    const [enabled, setEnabled] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMove = (event) => {
            const { clientX, clientY } = event
            setPosition({ x: clientX, y: clientY })
        }
        if (enabled) {
            window.addEventListener('pointermove', handleMove)
        }
        return () => { //EL RETORNO ES PARA LIMPIAR LAS SUSCRIPCIONES A EVENTOS
            window.removeEventListener('pointermove', handleMove)
        }
    }, [enabled])
    return (
        <>
            <div style={{
                position: 'absolute',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                border: '1px solid #fff',
                borderRadius: '50%',
                opacity: 0.8,
                pointerEvents: 'none',
                left: -25,
                top: -25,
                width: 50,
                height: 50,
                transform: `translate(${position.x}px, ${position.y}0px)`
            }}
            ></div>
            <button onClick={() => setEnabled(!enabled)}>
                {enabled ? 'Desactivar' : 'Activar'} seguir puntero
            </button>
        </>
    )
}