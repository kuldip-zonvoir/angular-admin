import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChatComponent } from "./chat/chat.component";

import { ChatsComponent } from "./chats.component";
import { GroupChatComponent } from "./group-chat/group-chat.component";

const routes: Routes = [
  {
    path: "",
    component: ChatsComponent,
    children: [
      {
        path: "private-chat",
        component: ChatComponent,
        data: { breadcrumb: "Private Chat" },
      },
      {
        path: "group-chat",
        component: GroupChatComponent,
        data: { breadcrumb: "Group Chat" },
      },
      {
        path: "",
        pathMatch: "full",
        redirectTo: "/private-chat/1",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatsRoutingModule {}
