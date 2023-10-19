'use client';

import { Container } from "./styles";
import { ReactNode, useEffect } from "react";

export function ModalGeneric2({
  onClose,
  children,
}:{
  onClose:Function,
  children: ReactNode;
}) {

  const onEscape = (e:any)=>{
    /*
    execute onClose when key escape is pressed
    */
    if (e.key === 'Escape') {
      onClose()
    }
  }

  useEffect(()=>{
    /*
    on load
    */
    window.addEventListener('keydown',onEscape)
  }, [])

  return (
    <Container>
      <div className="hero" onClick={()=>onClose()}>
        <div className="box" onClick={(e)=>e.stopPropagation()}> {/*avoid onclick on parent*/}
          <button className="btn" onClick={()=>onClose()}></button>
          {children}
        </div>
      </div>
    </Container>
  )
}
