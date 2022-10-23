for (i = 0; i < 5; i++) {
    let n = parseInt(prompt('informe um número para saber os proximos 5 múltiplos dele'))
    for (u = 1; u <= 5; u++) {
        console.log(n, 'x', n + u, '=', n * (n + u))
    }
}