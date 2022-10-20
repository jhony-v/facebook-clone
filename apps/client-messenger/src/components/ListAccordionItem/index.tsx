import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react'


type ListAccordionItemProps = {
    title?: string,
    showIcon?: boolean
}

const ListAccordionItem: FC<PropsWithChildren<ListAccordionItemProps>> = (props) => {
    const { children, title, showIcon } = props;
    return (
        <AccordionItem>
            <AccordionButton>
                <Box fontWeight={"medium"} fontSize="sm" flex='1' textAlign='left'>
                    {title}
                </Box>
                {showIcon && <AccordionIcon />}
            </AccordionButton>
            <AccordionPanel pb={4}>
                {children}
            </AccordionPanel>
        </AccordionItem>
    )
}

export default ListAccordionItem