import { FileVideo, Upload, Wand } from "lucide-react";
import { Textarea } from "./components/ui/textarea";
import { Separator } from "./components/ui/separator";
import { Label } from "@radix-ui/react-label";
import { Button } from "./components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./components/ui/select";
import { Slider } from "./components/ui/slider";

export function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">
          upload.ai
        </h1>
      </div>
      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea 
              placeholder="Inclua o prompt para a IA" 
              className="resize-none p-4 leading-relaxed"
            />
            <Textarea 
              placeholder="Resultado gerado pela IA"
              className="resize-none p-4 leading-relaxed"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Lembre-se: você pode utilizar a variável <code className="text-violet-400">{'{transcription}'}</code> no seu prompt para adicionar o contepudo da transcrição do vídeo selecionado.
          </p>
        </div>
        <aside className="w-80 space-y-6">
          <form action="" className="space-y-6">
            <label htmlFor="input-video-file" className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5">
            <FileVideo className="w-4 h-4"/> Selecione um vídeo
            </label>
            <input type="file" id="input-video-file" accept="video/mp4" className="sr-only" />
            <Separator />
            <div className="space-y-1">
              <Label htmlFor='transcription_prompt'> 
                Prompt de transcrição
              </Label>
              <Textarea 
                id='transcription_prompt'
                className="h-20 leading-relaxed"
                placeholder="Inclua palavras-chave mencionadas no vídeo separadas por vírgula (,)"
              />
            </div>
            <Button type="submit" className="w-full">
              Carregar vídeo <Upload className="w-4 h-4 ml-2"/>
            </Button>
          </form>
          <Separator/>
          <form action="" className="space-y-6">
          <div className="space-y-1">
              <Label> Prompt </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um prompt"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title"> Título do Youtube </SelectItem>
                  <SelectItem value="description"> Descrição do Youtube </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label> Modelo </Label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5"> GPT 3.5 - turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground leading-relaxed"> 
                Você poderá customizar essa opção em breve.
              </span>
            </div>
            <Separator/>
            <div className="space-y-4">
              <Label> Temperatura </Label>
              <Slider 
                min={0}
                max={1}
                step={0.1}
              />
              <span className="block text-xs text-muted-foreground leading-relaxed"> 
                Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros.
              </span>
            </div>
            <Separator/>
            <Button type="submit" className="w-full">
              Executar
              <Wand className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}


