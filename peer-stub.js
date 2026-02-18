// PeerJS stub for testing
class Peer {
    constructor(id, options) {
        this.id = id || 'test-id-' + Math.random().toString(36).substr(2, 9);
        setTimeout(() => {
            if (this._openHandler) this._openHandler(this.id);
        }, 100);
    }
    on(event, handler) {
        if (event === 'open') this._openHandler = handler;
        if (event === 'error') this._errorHandler = handler;
        if (event === 'connection') this._connectionHandler = handler;
        return this;
    }
    connect(id) { return { on: () => {}, send: () => {} }; }
    destroy() {}
}
