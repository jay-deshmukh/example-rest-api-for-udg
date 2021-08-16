import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.reviews));
});

router.get('/:reviewId', (req, res) => {
  return res.send(req.context.models.reviews.filter(({userId}) => req.params.reviewId === userId));
});

router.post('/', (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    userId: req.body.userId,
  };

  req.context.models.reviews.push(message);

  return res.send(message);
});

router.delete('/:reviewId', (req, res) => {

  req.context.models.reviews = req.context.models.reviews.filter(({id}) => req.params.reviewId !== id);

  return res.send({message: 'review deleted'});
});

export default router;
