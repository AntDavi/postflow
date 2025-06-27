import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DragHandleDots2Icon } from '@radix-ui/react-icons'

type ContentItem = {
    dia: number
    tipo: string
    titulo: string
    descricao: string
    conteudo: string
    hashtags: string[]
    cta: string
}

export function ListCard({ item }: { item: ContentItem }) {
    return (
        <Card>
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
            <CardFooter>
                <span className="italic text-blue-700">{item.cta}</span>
            </CardFooter>

        </Card>
    )
}
