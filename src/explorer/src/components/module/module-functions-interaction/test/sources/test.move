module test::test
{
    // === Imports ===

    use std::string::{String, utf8};

    // === Structs ===

    public struct Test has key, store {
        id: UID,

        bool: bool,
        u8: u8,
        u16: u16,
        addr: address,
        str: String,
        foo: Foo,
        opt_u8: Option<u8>,
        opt_u16: Option<u16>,
        opt_str: Option<String>,

        vec_bool: vector<bool>,
        vec_u8: vector<u8>,
        vec_u16: vector<u16>,
        vec_vec_u16: vector<vector<u16>>,
        vec_addr: vector<address>,
        vec_str: vector<String>,
        vec_foo: vector<Foo>,
        vec_opt_u8: vector<Option<u8>>,
        vec_opt_u16: vector<Option<u16>>,
        vec_opt_str: vector<Option<String>>,
    }

    public struct Foo has key, store {
        id: UID,
        val: u64,
    }

    // === Constructors ===

    public fun new_test(
        ctx: &mut TxContext,
    ): Test {
        let test = Test {
            id: object::new(ctx),

            bool: false,
            u8: 0,
            u16: 0,
            addr: @0x1234,
            str: utf8(b""),
            foo: Foo { id: object::new(ctx), val: 0 },
            opt_u8: option::none(),
            opt_u16: option::none(),
            opt_str: option::none(),

            vec_bool: vector::empty(),
            vec_u8: vector::empty(),
            vec_u16: vector::empty(),
            vec_vec_u16: vector::empty(),
            vec_addr: vector::empty(),
            vec_str: vector::empty(),
            vec_foo: vector::empty(),
            vec_opt_u8: vector::empty(),
            vec_opt_u16: vector::empty(),
            vec_opt_str: vector::empty(),
        };
        return test
    }

    public entry fun e_new_test(
        ctx: &mut TxContext,
    ) {
        let test = new_test(ctx);
        transfer::public_transfer(test, ctx.sender())
    }

    public fun two_new_tests(
        ctx: &mut TxContext,
    ): (Test, Test) {
        return (new_test(ctx), new_test(ctx))
    }

    // === Destructors ===

    public fun destroy_test(
        test: Test,
    ) {
        let Test {
            id,
            bool: _,
            u8: _,
            u16: _,
            addr: _,
            str: _,
            foo,
            opt_u8: _,
            opt_u16: _,
            opt_str: _,
            vec_bool: _,
            vec_u8: _,
            vec_u16: _,
            vec_vec_u16: _,
            vec_addr: _,
            vec_str: _,
            mut vec_foo,
            vec_opt_u8: _,
            vec_opt_u16: _,
            vec_opt_str: _,
        } = test;

        id.delete();
        foo.destroy_foo();

        while ( vec_foo.length() > 0 ) {
            let foo = vec_foo.pop_back();
            foo.destroy_foo();
        };
        vec_foo.destroy_empty();
    }

    public fun destroy_foo(
        foo: Foo,
    ) {
        let Foo { id, val: _ } = foo;
        id.delete();
    }

    // === Setters: single-value ===

    public fun set_bool(test: &mut Test, bool: bool) { test.bool = bool; }

    public fun set_u8(test: &mut Test, u8: u8) { test.u8 = u8; }

    public fun set_u16(test: &mut Test, u16: u16) { test.u16 = u16; }

    public fun set_addr(test: &mut Test, addr: address) { test.addr = addr; }

    public fun set_str_as_str(test: &mut Test, str: String) { test.str = str; }
    public fun set_str_as_vec_u8(test: &mut Test, str: vector<u8>) { test.str = utf8(str); }

    public fun set_opt_u8(test: &mut Test, opt_u8: Option<u8>) { test.opt_u8 = opt_u8; }

    public fun set_opt_u16(test: &mut Test, opt_u16: Option<u16>) { test.opt_u16 = opt_u16; }

    public fun set_opt_str_as_str(test: &mut Test, opt_str: Option<String>) { test.opt_str = opt_str; }
    public fun set_opt_str_as_vec_u8(test: &mut Test, opt_str: Option<vector<u8>>) {
        if (opt_str.is_some()) {
            test.opt_str = option::some( utf8( opt_str.destroy_some() ) )
        } else {
            test.opt_str = option::none();
        }
    }

    // public fun set_foo(test: &mut Test, foo: Foo) { test.foo = foo; }

    // === Setters: vectors ===

    public fun set_vec_bool(test: &mut Test, vec_bool: vector<bool>) { test.vec_bool = vec_bool; }

    public fun set_vec_u8(test: &mut Test, vec_u8: vector<u8>) { test.vec_u8 = vec_u8; }

    public fun set_vec_u16(test: &mut Test, vec_u16: vector<u16>) { test.vec_u16 = vec_u16; }

    public fun set_vec_vec_u16(test: &mut Test, vec_vec_u16: vector<vector<u16>>) { test.vec_vec_u16 = vec_vec_u16; }

    public fun set_vec_addr(test: &mut Test, vec_addr: vector<address>) { test.vec_addr = vec_addr; }

    public fun set_vec_str_as_vec_str(test: &mut Test, vec_str: vector<String>) { test.vec_str = vec_str; }
    public fun set_vec_str_as_vec_vec_u8(test: &mut Test, vec_vec_u8: vector<vector<u8>>) {
        let len = vec_vec_u8.length();
        let mut i = 0;
        let mut vec_str = vector::empty<String>();
        while ( i < len ) {
            let raw = vec_vec_u8.borrow(i);
            let str = utf8(*raw);
            vec_str.push_back(str);
            i = i + 1;
        };
        test.vec_str = vec_str;
    }

    public fun set_vec_opt_u8(test: &mut Test, vec_opt_u8: vector<Option<u8>>) { test.vec_opt_u8 = vec_opt_u8; }

    public fun set_vec_opt_u16(test: &mut Test, vec_opt_u16: vector<Option<u16>>) { test.vec_opt_u16 = vec_opt_u16; }

    public fun set_vec_opt_str_as_vec_str(test: &mut Test, vec_opt_str: vector<Option<String>>) { test.vec_opt_str = vec_opt_str; }
    public fun set_vec_opt_str_as_vec_u8(test: &mut Test, vec_opt_vec_u8: vector<Option<vector<u8>>>) {
        let len = vec_opt_vec_u8.length();
        let mut i = 0;
        let mut vec_opt_str = vector::empty<Option<String>>();
        while ( i < len ) {
            let opt = *vec_opt_vec_u8.borrow(i);
            if (opt.is_none()) {
                vec_opt_str.push_back(option::none());
            } else {
                let raw = opt.destroy_some();
                let str = utf8(raw);
                vec_opt_str.push_back(option::some(str));
            };
            i = i + 1;
        };
        test.vec_opt_str = vec_opt_str;
    }

    // public fun set_vec_foo(test: &mut Test, vec_foo: vector<Foo>) { test.vec_foo = vec_foo; }

    // === Functions that return values ===

    public fun double_u8(num: u8): u8 {
        return num * 2
    }

    public fun get_u8_and_foo(ctx: &mut TxContext): (u8, Foo) {
        return (123, Foo { id: object::new(ctx), val: 33 })
    }

    public fun sum_three_u8(a: u8, b: u8, c: u8): u8 {
        return a + b + c
    }
}
