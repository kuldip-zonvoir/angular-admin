import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/partials/content/shared-components/shared.module";
import { ChatsRoutingModule } from "./chats-routing.module";
import { ChatsComponent } from "./chats.component";
import { ChatComponent } from "./chat/chat.component";
import { ChatingComponent } from "./chating/chating.component";
import { ChatlistComponent } from "./chatlist/chatlist.component";
import { GroupChatComponent } from "./group-chat/group-chat.component";
import { GroupChatingComponent } from "./group-chating/group-chating.component";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ChatHeaderComponent } from "./chat-header/chat-header.component";

@NgModule({
  declarations: [
    ChatsComponent,
    ChatComponent,
    ChatingComponent,
    ChatlistComponent,
    GroupChatComponent,
    GroupChatingComponent,
    ChatHeaderComponent,
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    SharedModule,
    ChatsRoutingModule,
  ],
})
export class ChatsModule {}
