<?php

namespace App\Http\Controllers;

use App\Models\Productos;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $productos = Productos::all();

        return Inertia::render('producto/Index', ['producto' => $productos]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('producto/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate(['nombre' => 'required']);
        $prducto = new Productos($request->input());
        $prducto->save();
        // return redirect('producto/Index');
        return redirect('producto/Index');


    }

    /**
     * Display the specified resource.
     */
    public function show(Productos $productos)
    {
        //


    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Productos $producto)
    {
        //  dd($producto);
        return Inertia::render('producto/Edit', ['producto' => $producto]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Productos $producto)
    {
        $request->validate(['nombre' => 'required']);
        $producto->update($request->all());

        return redirect('producto/Index');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Productos $producto)
    {
        //}
        // dd($producto);
        $producto->delete();
        return redirect('producto/Index');



    }
}