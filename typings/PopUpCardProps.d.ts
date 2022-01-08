export type PopUpCardProps = {
    truth: boolean,
    currentId: number,
    targetId: number,
    SetTruth: Function,
    linkLocation: string,
    transition: 'up' | 'down' | string,
    description?: string
    linkDescription?: string
}