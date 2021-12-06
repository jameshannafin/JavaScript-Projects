function display_npc_type(npc){
    var npc_type = npc.getAttribute("data-player_relation");
    alert(npc.innerHTML + " is " + npc_type + " to the player.")
}