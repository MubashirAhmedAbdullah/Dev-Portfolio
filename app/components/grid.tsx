import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { GridItemsData } from '@/data'

const Grid = () => {
    return (
        <section id='about'>
            <BentoGrid>
                {GridItemsData.map((item) => (
                    <BentoGridItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </BentoGrid>
        </section>
    )
}

export default Grid
