import { ReactNode } from "react";
import { Container } from "./styles";
import { Col } from "@/shared/Col";
import { ButtonIcon } from "../ButtonIcon";
import { useRouter, usePathname } from 'next/navigation'


interface Props {
  children: ReactNode;
  
  title: string;
}

export const CardDetailedCharts = ({
  children,
  title,
}: Props) => {
  const router = useRouter()
  const path = usePathname()
  function closeModal(){
    router.push('/'); 
  }
  return (
    <Container >
      <div className="close">
        <ButtonIcon 
                IconType="close"
                functionButtonIcon={()=>closeModal()}
              >
        </ButtonIcon>
      </div>
      <Col width={"100%"} flex={"1"} alignItems={"center"} gap={"0"}>
      
        <h2 className={"titleStyle"}>{title}</h2>
        <div className={"contentStyle"}>{children}</div>
      </Col>
      
    </Container>
  );
};
