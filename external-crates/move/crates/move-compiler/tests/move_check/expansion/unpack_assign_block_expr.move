module 0x42::M {
    struct S { f: u64 }
    fun foo() {
        S { let f = 0; } = S { f: 0 };
    }
}
