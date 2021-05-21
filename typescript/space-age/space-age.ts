interface IPlanet {
    [planet: string]: number
}

const YEAR_IN_SECONDS = 31557600

const PLANETS: IPlanet = {
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.7913,
}

export default class SpaceAge {
    private _seconds: number

    constructor(seconds: number) {
        this._seconds = seconds
    }

    get seconds(): number {
        return this._seconds
    }

    onEarth(): number {
        return this.formatForReturn(this._seconds / YEAR_IN_SECONDS)
    }
    onMercury(): number {
        return this.formatForReturn(this.onEarth() / PLANETS.mercury)
    }
    onVenus(): number {//Venus test failed du to get 9.79 instead of 9.78
        return this.formatForReturn(this.onEarth() / PLANETS.venus)
    }
    onMars(): number {
        return this.formatForReturn(this.onEarth() / PLANETS.mars)
    }
    onJupiter(): number {
        return this.formatForReturn(this.onEarth() / PLANETS.jupiter)
    }
    onSaturn(): number {
        return this.formatForReturn(this.onEarth() / PLANETS.saturn)
    }
    onUranus(): number {
        return this.formatForReturn(this.onEarth() / PLANETS.uranus)
    }
    onNeptune(): number {
        return this.formatForReturn(this.onEarth() / PLANETS.neptune)
    }

    formatForReturn(value: number): number {
        return +(value.toFixed(2))
    }
}