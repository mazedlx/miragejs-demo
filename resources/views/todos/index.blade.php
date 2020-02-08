<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Todos</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>
<body>
    <div id="app" class="container mx-auto">
        <h1 class="text-3xl">Todos</h1>
        <todo-list></todo-list>
    </div>
    <script src="{{ mix('js/app.js')}}"></script>
</body>
</html>
