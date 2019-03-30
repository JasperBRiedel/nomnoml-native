# nomnoml-native

A super tiny native wrapper around the nomnoml UML drawing tool.
nomnoml-native watches a specified local file and renders the described UML diagram automatically.

# nomnoml

This project is built around [nomnoml](https://github.com/skanaar/nomnoml) an awesome UML diagram renderer. 
Make sure to checkout the orignal online version [here](http://www.nomnoml.com/)

## Usage
Simply execute with a file that contains nomnoml syntax.
`yarn start [filepath]` or `nomnoml-native [filepath]` if built.

To create an executable run the following:
`yarn build`

## Syntax

### Example

This is what the Decorator pattern looks like in nomnoml syntax:

    [<frame>Decorator pattern|
      [<abstract>Component||+ operation()]
      [Client] depends --> [Component]
      [Decorator|- next: Component]
      [Decorator] decorates -- [ConcreteComponent]
      [Component] <:- [Decorator]
      [Component] <:- [ConcreteComponent]
    ]

### Association types

    -    association
    ->   association
    <->  association
    -->  dependency
    <--> dependency
    -:>  generalization
    <:-  generalization
    --:> implementation
    <:-- implementation
    +-   composition
    +->  composition
    o-   aggregation
    o->  aggregation
    --   note
    -/-  hidden

### Classifier types

    [name]
    [<abstract> name]
    [<instance> name]
    [<reference> name]
    [<note> name]
    [<package> name]
    [<frame> name]
    [<database> name]
    [<start> name]
    [<end> name]
    [<state> name]
    [<choice> name]
    [<input> name]
    [<sender> name]
    [<receiver> name]
    [<transceiver> name]
    [<actor> name]
    [<usecase> name]
    [<label> name]
    [<hidden> name]

### Directives

    #arrowSize: 1
    #bendSize: 0.3
    #direction: down | right
    #gutter: 5
    #edgeMargin: 0
    #edges: hard | rounded
    #fill: #eee8d5; #fdf6e3
    #fillArrows: false
    #font: Calibri
    #fontSize: 12
    #leading: 1.25
    #lineWidth: 3
    #padding: 8
    #spacing: 40
    #stroke: #33322E
    #title: filename
    #zoom: 1

### Custom classifier styles

A directive that starts with "." define a classifier style. The style is written as a space separated list of modifiers and key/value pairs.

    #.box: fill=#8f8 dashed
    #.blob: visual=ellipse
    [<box> GreenBox]
    [<blob> HideousBlob]

Available key/value pairs are

    fill=(any css color)

    stroke=(any css color)

    align=center
    align=left

    direction=right
    direction=down

    visual=actor
    visual=class
    visual=database
    visual=ellipse
    visual=end
    visual=frame
    visual=hidden
    visual=input
    visual=none
    visual=note
    visual=package
    visual=receiver
    visual=rhomb
    visual=roundrect
    visual=sender
    visual=start
    visual=transceiver

Available modifiers are

    bold
    underline
    italic
    dashed
    empty
