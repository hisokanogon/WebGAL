import {IPerform} from "../interface/perform";

interface IGamePlay {
    performList: Array<IPerform>, //当前演出序列
    timeoutList: Array<any>,// 定时器（用于清除演出）列表
    isAuto: boolean,
    isFast: boolean,
    autoInterval: ReturnType<typeof setInterval> | null,
    fastInterval: ReturnType<typeof setInterval> | null
}

/**
 * 游戏运行时变量
 */
export const runtime_gamePlay: IGamePlay = {
    performList: [],
    timeoutList: [],
    isAuto: false,
    isFast: false,
    autoInterval: null,
    fastInterval: null
}
