module 0x42::M {
    fun f(v: u64) {
        // Aborts always require a value
        if (v > 100) abort
    }
}
