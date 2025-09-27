import { IClock } from "../types"

/** Clock With Listeners (delegates)
 * This is a singleton class that creates a clock that ticks at a regular interval.
 * It does *NOT* keep track of the time.
 * It has a list of listeners that it notifies on each tick.
 */


// the listener does not expect an argument
type Listener = () => void



class Clock implements IClock{

    private _listeners: Listener[] = []
    private _notifyAll() {this._listeners.forEach(eachListener => {eachListener()})}

    public addListener(listener: Listener) {
        this._listeners.push(listener)
    }
    public removeListener(listener: Listener) {
        this._listeners = this._listeners.filter(eachListener => eachListener !== listener)
    }

    get nListeners () {return this._listeners.length}

    private _timer : NodeJS.Timeout 
    private _interval : number

    public constructor(interval: number) {

        this._interval = interval
        this.start()
    }

    // make sure 'this' is bound statically
    public start = () => {
        this._timer = setInterval(() => {
            this._tick();
        }, this._interval);        
    }

    public stop = () => {
        clearInterval(this._timer);
    }

    private _tick() {
        this._notifyAll();
        }

    
    
}

export default class SingletonClockFactory {
    private static _instance: Clock | null = null
    public static getInstance(interval: number) {
        if (SingletonClockFactory._instance === null) {
            SingletonClockFactory._instance = new Clock(interval)
        }
        return SingletonClockFactory._instance
    }
}



