import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DragHandleDots2Icon } from '@radix-ui/react-icons'

type ContentItem = {
    dia: number
    tipo: string
    titulo: string
    descricao: string
    conteudo: string
    hashtags: string[]
}

export function ListCard({ item }: { item: ContentItem }) {
    return (
        <Card className="flex items-center flex-row justify-between p-4 hover:bg-gray-50 transition-colors">
            <div className="space-y-2 flex-1">
                <CardHeader>
                    <CardTitle>Dia {item.dia}: {item.tipo}</CardTitle>
                    <CardDescription>{item.descricao}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div>
                        <strong className="text-gray-600">Título:</strong> {item.titulo}
                    </div>
                    <div>
                        <strong className="text-gray-600">Legenda:</strong> {item.conteudo}
                    </div>
                    <div>
                        <strong className="text-gray-600">Hashtags:</strong> {item.hashtags.join(" ")}
                    </div>
                </CardContent>
            </div>
            <div className="flex items-center justify-center cursor-move">
                <DragHandleDots2Icon
                    className="w-6 h-6 text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label="Drag to reorder"
                />
            </div>
        </Card>
    )
}
