"use client"

import { ListCard } from "./ListCard"

type ContentItem = {
    dia: number
    tipo: string
    titulo: string
    descricao: string
    conteudo: string
    hashtags: string[]
}

export default function ContentList({ items }: { items: ContentItem[] }) {
    return (
        <div className="max-w-2xl mx-auto p-4 space-y-4">
            {items.map((item, idx) => (
                <ListCard key={idx} item={item} />
            ))}
        </div>
    )
}
