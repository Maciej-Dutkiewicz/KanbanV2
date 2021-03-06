import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';

const router = new Router({ mergeParams: true });

router.route('/notes').post(NoteController.addNote);

router.route('/notes/:noteId').get(NoteController.getNote);

router.route('/notes/:noteId').delete(NoteController.deleteNote);

router.route('/notes/:noteId').put(NoteController.updateNote);

export default router;
